import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzNotificationService, NzModalService } from "ng-zorro-antd";
import { ModelCustomComponent } from "./custom.component";

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
    constructor(
        private msg: NzMessageService,
        private ntf: NzNotificationService,
        private model: NzModalService
    ) { }

    marks = {
        0: 'naver'
    };

    // =====Message=====

    message = {
        type: 'info',
        content: 'This is a message!',
        duration: 2
    };

    createMessage() {
        this.msg.create(
            this.message.type,
            this.message.content,
            {
                nzDuration: this.message.duration * 1000
            }
        );
    }

    clearMessage() {
        this.msg.remove();
    }

    // =====Notification=====
    notify = {
        type: 'info',
        title: 'Notification Title',
        content: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        duration: 5
    };

    createNotify() {
        this.ntf.create(
            this.notify.type,
            this.notify.title,
            this.notify.content,
            {
                nzDuration: this.notify.duration * 1000
            }
        );
    }

    clearNotify() {
        this.ntf.remove();
    }

    // =====Model=====
    basicModel(contentTpl) {
        this.model.open({
            title: 'Basic Modal',
            content: contentTpl
        });
    }

    confirmModel(contentTpl) {
        this.model.open({
            title: 'Confirm Modal',
            content: contentTpl,
            okText: 'OK',
            cancelText: 'Return',
            onOk: () => {
                this.msg.success('Click OK!')
            },
            onCancel: () => {
                this.msg.error('Click Return!')
            }
        });
    }

    customCompModel() {
        this.model.open({
            title: 'Confirm Modal',
            content: ModelCustomComponent,
            footer: false,
            componentParams: {
                name: 'From Parent Data'
            }
        }).subscribe(result => {
            this.msg.info(`subscribe status: ${result}`);
        });
    }

    showModel(type: string) {
        this.model[type]({
            title: `This is a ${type} message`,
            content: `some messages...some messages...`
        })
    }

    // Popconfirm
    popConfirm() {
        this.msg.success('Next step.');
    }

    popCancel() {
        this.msg.error('Click on No');
    }

    // Progress Bar
    percent = 0;

    decline() {
        this.percent = this.percent - 10;
        if (this.percent < 0) {
          this.percent = 0;
        }
    }

    increase() {
        this.percent = this.percent + 10;
        if (this.percent > 100) {
          this.percent = 100;
        }
    }
}
