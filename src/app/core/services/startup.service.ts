import { Router } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MenuService } from "./menu.service";
import { TranslatorService } from "../translator/translator.service";
import { SettingsService } from "./settings.service";
import { ACLService } from "../acl/acl.service";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
    constructor(
        private menuService: MenuService,
        private tr: TranslatorService,
        private settingService: SettingsService,
        private aclService: ACLService,
        private httpClient: HttpClient,
        private injector: Injector) { }

    load(): Promise<any> {
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        let ret = this.httpClient
                    .get('./assets/app-data.json')
                    .toPromise()
                    .then((res: any) => {

                        this.settingService.setApp(res.app);
                        this.settingService.setUser(res.user);
                        // 设置ＡＣＬ权限为全量
                        this.aclService.setFull(true);
                        // 初始化菜单
                        this.menuService.add(res.menu);
                        // 调整语言
                        this.tr.use('en');
                    })
                    .catch((err: HttpErrorResponse) => {
                        // just only injector way if you need navigate to login page.
                        // this.injector.get(Router).navigate([ '/login' ]);
                        switch(err.status) {
                            case 401:
                                this.injector.get(Router).navigate([ '/login' ]);
                                break;
                            default:
                                this.injector.get(Router).navigate([ '/maintenance' ]);
                                break;
                        }
                        return Promise.resolve(null);
                    });

        return ret;
    }
}
