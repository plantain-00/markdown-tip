import * as React from 'react'
import * as common from 'markdown-tip'
export * from 'markdown-tip'

/**
 * @public
 */
export class MarkdownTip extends React.PureComponent<{ locale?: common.Locale | null }, unknown> {
  private visibleText: string | null = null
  private titleClass = common.defaultTitleClass

  render() {
    const datas = common.getLocale(this.props.locale)

    const items = datas.map((data, i) => {
      const title = data.text === this.visibleText ? <pre className={this.titleClass}>{data.title}</pre> : null
      return (
        <div className='markdown-tip-item' key={i} onMouseEnter={e => this.mouseenter(data, e)} onMouseLeave={e => this.mouseleave(data)}>
          <span className='markdown-tip-item-text'>{data.text}</span>
          {title}
        </div>
      )
    })

    return (
      <div className='markdown-tip'>
        {items}
      </div>
    )
  }
  private mouseenter(data: common.Data, event: React.MouseEvent<HTMLDivElement>) {
    this.visibleText = data.text
    this.titleClass = common.getTitleClass(event.target as HTMLElement)
    this.setState({ visibleText: this.visibleText, titleClass: this.titleClass })
  }
  private mouseleave(data: common.Data) {
    this.visibleText = null
    this.setState({ visibleText: this.visibleText })
  }
}
