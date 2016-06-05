import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'widget',
    templateUrl: 'app/components/widget/widget.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ROUTER_DIRECTIVES]
})
export class WidgetComponent {
    @Input('caption')
    _caption: string;
    @Input('count')
    _count: string;
    @Input('icon')
    _icon: string;
    @Input('color')
    _color: string;
    @Input('target')
    _target: string;
}