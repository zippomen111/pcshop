declare module '*.scss' {
    const content: { [key: string]: any }
    export = content
}
declare module "*.png" {
    const value: string;
    export default value;
}
declare module '*.svg' {
    const content: { [key: string]: any }
    export = value;
}
declare module 'lodash.debounce';