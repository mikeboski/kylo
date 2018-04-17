import {Component, OnInit} from '@angular/core';
import {Message} from './message';
import {ActivityService} from './activity.service';

@Component({
    selector: 'app-main-activity',
    templateUrl: 'js/medikly/profile/main-activity/main-activity.component.html',
    styleUrls: ['js/medikly/profile/main-activity/main-activity.component.css'],
    providers: [ActivityService]
})
export class MainActivityComponent implements OnInit {
    messages: Message[];
    selectedMessage: Message;

    constructor(protected activityService: ActivityService) {
        this.getMessages();
    }

    ngOnInit() {
    }

    getMessages(): void {
        this.activityService.getMessages().then(messages => this.messages = messages);
    }

    onSelect(message: Message): void {
        this.selectedMessage = message;
    }
}
