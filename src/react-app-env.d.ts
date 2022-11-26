declare module '*.less' {
  const content: { [className: string]: string }
  export default content
}
declare module '*.less'
declare module '*.module.less' {
  const classes: { [className: string]: string }
  export default classes
}
