import {NgModule} from '@angular/core';
import {TransferHttpResponseInterceptor} from './transfer-http-response-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestKeyExtractorService} from './request-key-extractor.service';

@NgModule({
  imports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TransferHttpResponseInterceptor,
      multi: true
    },
    RequestKeyExtractorService
  ],
  declarations: []
})
export class TransferHttpResponseModule {
}
