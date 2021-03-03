import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(distance: string, unit?: string): string {
    if (!distance) {
      return null;
    }

    let roundDistance: number = Math.round(+distance);
    let distanceWithUnit: string;
    if (roundDistance >= 0 && roundDistance < 1000) {
      distanceWithUnit = `${roundDistance}${'M'}`; 
    } else if ( roundDistance >= 1000 ) {
      distanceWithUnit = `${roundDistance}${'KM'}`;  
    }
    return distanceWithUnit;
  }

}
