import {
  Component,
  OnChanges,
  SimpleChanges,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss'],
})
export class EngineComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  symbols: string[] = ['🍊', '7️⃣', '🍉', '🍒'];
  firstItem: string = '';
  secondItem: string = '';
  thirdItem: string = '';
  score: number = 0;
  results = [''];
  gameOver = false;
  match = false;
  currentItemA: boolean = false;
  currentItemB: boolean = false;
  currentItemC: boolean = false;
  currentItemD: boolean = false;
  currentItemE: boolean = false;
  currentItemF: boolean = false;
  currentItemG: boolean = false;
  currentItemH: boolean = false;
  betScoreA: number = 0;
  betScoreB: number = 0;
  betScoreC: number = 0;
  betScoreD: number = 0;
  betScoreE: number = 0;
  betScoreF: number = 0;
  betScoreG: number = 0;
  betScoreH: number = 0;
  bet: number = 0;
  selectedOption: string | undefined;

  //ref tag
  @ViewChild('scoreValueInput') inputName: { nativeElement: { value: string } };
  @ViewChild('containerElement', { static: false })
  containerElementRef: ElementRef;
  containerElement: HTMLElement;
  showContainer = false;

  // Chosse bet
  onSubmit() {
    console.log(`Selected option: ${this.selectedOption}`);
    if (this.selectedOption === 'bet10') {
      this.bet = 10;
    } else if (this.selectedOption === 'bet50') {
      this.bet = 50;
    } else if (this.selectedOption === 'bet100') {
      this.bet = 100;
    }

    this.betScoreA = 50 * this.bet;
    this.betScoreB = 40 * this.bet;
    this.betScoreC = 25 * this.bet;
    this.betScoreD = 10 * this.bet;
    this.betScoreE = 5 * this.bet;
    this.betScoreF = 3 * this.bet;
    this.betScoreG = 2 * this.bet;
    this.betScoreH = 1 * this.bet;

    // clear input field after submit
    this.inputName.nativeElement.value = ' ';
  }

  scoreValue(scoreValueInput: number): void {
    this.score = this.score + scoreValueInput;
    this.gameOver = false;
  }

  OnChanges() {
    this.suffle();
  }

  suffle() {
    // get every item column
    // setTimeout(() => {
    const getItemsFirstItem = Math.floor(Math.random() * this.symbols.length);
    this.firstItem = this.symbols[getItemsFirstItem];
    // }, 300);

    // setTimeout(() => {
    const getItemsSecondItem = Math.floor(Math.random() * this.symbols.length);
    this.secondItem = this.symbols[getItemsSecondItem];
    // }, 1000);

    // setTimeout(() => {
    const getItemsThirdItem = Math.floor(Math.random() * this.symbols.length);
    this.thirdItem = this.symbols[getItemsThirdItem];
    // }, 1000);

    //spin suffle items
    this.results = this.symbols.map(
      () => this.symbols[Math.floor(Math.random() * this.symbols.length)]
    );

    //TO-DO: investigate here!

    const items = document.querySelectorAll('.boxes');
    items.forEach((item, index) => {
      const delay = index * 200;
      setTimeout(() => {
        item.classList.add('move');
      }, delay);
      setTimeout(() => {
        item.classList.remove('move');
      }, delay + 500);
    });

    // wining condition
    if (
      this.firstItem === '7️⃣' &&
      this.secondItem === '7️⃣' &&
      this.thirdItem === '7️⃣'
    ) {
      this.score = this.score + 50 * this.bet;
      this.currentItemA = true;
    } else if (
      this.firstItem === '🍊' &&
      this.secondItem === '🍊' &&
      this.thirdItem === '🍊'
    ) {
      this.score = this.score + 40 * this.bet;
      this.currentItemB = true;
    } else if (
      this.firstItem === '🍉' &&
      this.secondItem === '🍉' &&
      this.thirdItem === '🍉'
    ) {
      this.score = this.score + 25 * this.bet;
      this.currentItemC = true;
    } else if (
      this.firstItem === '🍒' &&
      this.secondItem === '🍒' &&
      this.thirdItem === '🍒'
    ) {
      this.score = this.score + 10 * this.bet;
      this.currentItemD = true;
    } else if (this.firstItem === '7️⃣' && this.secondItem === '7️⃣') {
      this.score = this.score + 5 * this.bet;
      this.currentItemE = true;
    } else if (this.firstItem === '🍊' && this.secondItem === '🍊') {
      this.score = this.score + 3 * this.bet;
      this.currentItemF = true;
    } else if (this.firstItem === '🍉' && this.secondItem === '🍉') {
      this.score = this.score + 2 * this.bet;
      this.currentItemG = true;
    } else if (this.firstItem === '🍒' && this.secondItem === '🍒') {
      this.score = this.score + 1 * this.bet;
      this.currentItemH = true;
    }

    // lose condition
    else if (
      (this.firstItem !== '7️⃣' &&
        this.secondItem !== '7️⃣' &&
        this.thirdItem !== '7️⃣') ||
      (this.firstItem !== '🍊' &&
        this.secondItem !== '🍊' &&
        this.thirdItem !== '🍊') ||
      (this.firstItem !== '🍉' &&
        this.secondItem !== '🍉' &&
        this.thirdItem !== '🍉') ||
      (this.firstItem !== '🍒' &&
        this.secondItem !== '🍒' &&
        this.thirdItem !== '🍒') ||
      (this.firstItem !== '7️⃣' && this.secondItem !== '7️⃣') ||
      (this.firstItem !== '🍊' && this.secondItem !== '🍊') ||
      (this.firstItem !== '🍉' && this.secondItem !== '🍉') ||
      (this.firstItem !== '🍒' && this.secondItem !== '🍒')
    ) {
      this.score = this.score - 10 * this.bet;
      this.currentItemA = false;
      this.currentItemB = false;
      this.currentItemC = false;
      this.currentItemD = false;
      this.currentItemE = false;
      this.currentItemF = false;
      this.currentItemG = false;
      this.currentItemH = false;
    }

    if (this.score < 1) {
      this.gameOver = true;
    }
  }

  toggleContainer(): void {
    this.showContainer = !this.showContainer;
  }

  // reload
  reload() {
    window.location.reload();
  }
}
