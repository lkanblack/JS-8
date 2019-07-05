'use strict';

 /*
function numberCalc(arr){
   console.log(arr.shift());
}


numberCalc([20,5,8,12,3]);
*/

const
  n = 10;
var
  arr: array[1..n] of integer;
  Count: integer;
  i: byte;
begin
  randomize;
  Count:=0;
  writeln('Массив: ');
  for i:=1 to n do
  begin
    arr[i]:=random(50)-10;
    write(arr[i], ' ');
    if arr[i] < 6 then inc(Count);;
  end;
  writeln;
  writeln('Кол-во элементов, меньших 6: ', Count);
end.