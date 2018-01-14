# Angular Transfer Http Response

A tiny (1kb gzipped) angular module to seamlessly transfer and reuse server-side http responses in front-end.

# Installation
```bash
npm i angular-transfer-http-response --save
```

# Usage
Import `TransferHttpResponseModule` in your main module:
```ts
import {TransferHttpResponseModule} from 'angular-transfer-http-response';

@NgModule({
  imports: [TransferHttpResponseModule],
  //...
})
export class AppModule {
}
```

Also don't forget to import `ServerTransferStateModule` into your `AppServerModule`.

If you use different base urls in server and browser, you can provide one or more base url as `TRANSFER_RESPONSE_BASE_URLS`:
in your AppModule:
```ts
import {TRANSFER_RESPONSE_BASE_URLS} from 'angular-transfer-http-response';

@NgModule({
  //...
  providers: [{
    provide: TRANSFER_RESPONSE_BASE_URLS,
    useValue: ['/api']
  }],
  //...
})
export class AppModule {
}
```
And in your AppServerModule:
```ts
import {TRANSFER_RESPONSE_BASE_URLS} from 'angular-transfer-http-response';

@NgModule({
  //...
  providers: [{
    provide: TRANSFER_RESPONSE_BASE_URLS,
    useValue: ['https://my.domain/api']
  }],
  //...
})
export class AppServerModule {
}
```
With this configuration, response of a request to **https://my.domain/api/some-path** in server, will be reused in front-end
as response of the first request to **/api/some-path**.
You can provide more than one base url and they will matched correspondingly.

