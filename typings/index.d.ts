import 'egg';

declare module 'egg' {
    interface CustomController {
      bot: any;
    }
}