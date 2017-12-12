/**
 * Created by rc2122 on 6/1/2017.
 */
import {
    Component, Input, ViewContainerRef, ViewChild, ComponentRef
} from '@angular/core';
import {ModalButtonConfig} from "./models/modal-button-config";
import template from './modal.component.html';

@Component({
    selector: 'sdc-modal',
    template: template
})

export class ModalComponent {

    @Input() size:string; 'xl|l|md|sm|xsm';
    @Input() title:string;
    @Input() message:string;
    @Input() buttons:Array<ModalButtonConfig>;
    @Input() type:string; 'info|error|alert';

    //Allows for custom component as body instead of simple message. See ModalService.createActionModal for implementation details, and HttpService's catchError() for example.
    @ViewChild('dynamicContentContainer', {read: ViewContainerRef}) dynamicContentContainer:ViewContainerRef;
    innerModalContent:ComponentRef<ModalComponent>;
}
