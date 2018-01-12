Angular Transfer Http Response

Angular module to seamlessly transfer server-executed http responses to front-end.

# Installation
```bash
npm i angular-transfer-http-response --save
```

# Usage
Import `TransferHttpResponseModule` in your main module:
```ts
@NgModule({
  imports: [TransferHttpResponseModule],
  //...
})
export class AppModule {
}
```

Also don't forget to import `ServerTransferStateModule` into your `AppServerModule`.
