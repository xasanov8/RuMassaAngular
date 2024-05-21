import { Component, OnInit } from '@angular/core';
import { NovostiService } from '../novosti.service';
import { CardModel } from '../../../interfaces/card-model';

@Component({
  selector: 'app-novosti-one',
  templateUrl: './novosti-one.component.html',
  styleUrl: './novosti-one.component.scss'
})
export class NovostiOneComponent implements OnInit {
  
  constructor(private novostiService: NovostiService) { }
  news !: CardModel[];
  cards: any[] = [];
  pageIndex: number = 1;
  size: number = 12;

  ngOnInit(): void {
    this.getAll(this.pageIndex, this.size);
  }

  previousPage(): void {
    if (this.pageIndex >= 12){
      this.pageIndex -= 12;
    }
    this.getAll(this.pageIndex, this.size);
  }

  nextPage(): void {
    this.pageIndex += 12;
    this.getAll(this.pageIndex, this.size);
  }

  getAll(pageIndex: number, size: number): void {
    this.novostiService.getAllNews(pageIndex, size).subscribe(
      (data: CardModel[]) => {
        this.news = data;
        this.updateCards();
      }
    );
  }
  
  updateCards(): void {
    this.cards = this.news.map(newsItem => ({
      imgSrc: newsItem.cardPhoto,
      category: 'Без рубрики',
      title: newsItem.title,
      date: newsItem.date,
      authorImg: newsItem.user?.PhotoUrl || 'default-avatar.png',
      authorName: newsItem.user?.Name || 'Unknown Author',
      content: newsItem.description
    }));
  }
}
