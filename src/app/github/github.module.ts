import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { FormsModule } from '@angular/forms';
import { GithubService } from './services/github/github.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GithubComponent],
  imports: [CommonModule, GithubRoutingModule, FormsModule, HttpClientModule],
  providers: [GithubService],
})
export class GithubModule {}
