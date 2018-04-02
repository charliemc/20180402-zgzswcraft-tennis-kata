import { TennisGame } from './TennisGame';

const SCORE_NAMES = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
}

export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(private player1Name: string, private player2Name: string) {}

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name) {
      this.player1Score += 1;
    } else {
      this.player2Score += 1;
    }
  }

  getScore(): string {
    if (this.isTie) {
      return this.getTieScore();
    } else if (this.isAdvantageOrWin) {
      return this.getAdvantageOrWinScore();
    } else {
      return this.getRegularScore();
    }
  }

  private get isTie(): boolean {
    return this.player1Score === this.player2Score;
  }

  private getTieScore(): string {
    return this.player1Score < 3
      ? `${this.getScoreName(this.player1Score)}-All`
      : 'Deuce';
  }

  private getScoreName(score: number): string {
    return SCORE_NAMES[score];
  }

  private getAdvantageOrWinScore(): string {
    if (this.player1ScoreAdvantage === 1) {
      return 'Advantage player1';
    } else if (this.player1ScoreAdvantage === -1) {
      return 'Advantage player2';
    } else if (this.player1ScoreAdvantage >= 2) {
      return 'Win for player1';
    } else {
      return 'Win for player2';
    }
  }

  private getRegularScore(): string {
    return `${this.getScoreName(this.player1Score)}-${this.getScoreName(this.player2Score)}`;
  }

  private get player1ScoreAdvantage(): number {
    return this.player1Score - this.player2Score;
  }

  private get isAdvantageOrWin(): boolean {
    return this.player1Score >= 4 || this.player2Score >= 4;
  }
}
