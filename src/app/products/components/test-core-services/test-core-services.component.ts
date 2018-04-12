import { Component, OnInit, Optional, Inject } from '@angular/core';

import { ConfigOptionsService, ConstantsService, GeneratorService, LocalStorageService } from '../../../core';

@Component({
  selector: 'app-test-core-services',
  templateUrl: './test-core-services.component.html',
  styleUrls: ['./test-core-services.component.scss']
})
export class TestCoreServicesComponent implements OnInit {
  content: string;
  localSt: object;
  generatedContent: object;
  constantContent: object;
  configContent: object;

  constructor(
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(ConstantsService) private constantsService: {app: string, ver: string},
    @Optional() private generatorService: GeneratorService,
    @Optional() private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.localSt = localStorage;
    this.generatedContent = this.generatorService;
    this.constantContent = this.constantsService;
    this.configContent = this.configOptionsService.getConfig();
  }

  getItem(item: string): void {
    this.content = this.localStorageService.getItem(item);
    this.localSt = localStorage;
  }

  setItem(item: string, val: string): void {
    this.localStorageService.setItem(item, val);
  }

  removeItem(item: string): void {
    this.localStorageService.removeItem(item);
  }

  getConfig(): void {
    this.configContent = this.configOptionsService.getConfig();
  }

  setConfig(options): void {
    this.configOptionsService.setConfig(options);
  }
}
