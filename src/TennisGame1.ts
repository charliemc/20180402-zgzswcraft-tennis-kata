import { TennisGame } from './TennisGame';


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
    switch (this.player1Score) {
        case 0:
          return 'Love-All';
        case 1:
          return 'Fifteen-All';
        case 2:
          return 'Thirty-All';
        default:
          return 'Deuce';
      }
  }

  private getScoreName(score: number): string {
    switch (score) {
        case 0:
          return 'Love';
        case 1:
          return 'Fifteen';
        case 2:
          return 'Thirty';
        case 3:
          return 'Forty';
      }
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
