// import { IOutput } from './interfaces';
// import { TYPES } from './types';
import { injectable, inject } from 'inversify';

@injectable()
export class Dog {
    // constructor(@inject(TYPES.IOutput) private output: IOutput) {}

    bark(message: string) {
        console.dir('4564879879');
        // this.output.print(message);
    }
}
