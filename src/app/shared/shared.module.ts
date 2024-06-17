import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';

@NgModule({
    exports: [CardComponent],
    declarations: [CardComponent],
})
export class SharedModule { }
