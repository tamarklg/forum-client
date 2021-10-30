import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit, OnDestroy {

  user: User | null = null;
  messages: Message[] = [];

  subscription: Subscription;

  constructor(private userService: UserService,
              private messageService: MessageService,
              private authService: AuthService,
              private router: Router) {
    this.subscription = this.userService.userChange.subscribe(user => this.user = user);

    this.initMessages();
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout().subscribe(({ data }) => {
      if (data !== 'Successfully logged out') return;

      this.router.navigate(['login']);
    });
  }

  initMessages(): void {
    this.messageService.list().subscribe(res => this.messages = res.data);
  }

  send(text: string, messageId: string | null = null): void {
    const message = { text, messageId };

    this.messageService.create(message).subscribe(() => this.initMessages());
  }

  delete(id: string): void {
    this.messageService.delete(id).subscribe(() => this.initMessages());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
