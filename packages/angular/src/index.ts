import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MarkdownTipComponent } from './index.component'
export * from './index.component'
export * from 'markdown-tip'

/**
 * @public
 */
@NgModule({
  declarations: [
    MarkdownTipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MarkdownTipComponent
  ]
})
export class MarkdownTipModule { }
