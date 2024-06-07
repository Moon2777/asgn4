[old_x, old_y] = [0, 0];
function move(ev){
  //let [old_x, old_y] = [0, 0];
  if(moveCam){
    //if[old_x ]
    let [x,y] = covertCoordinateEventToGL(ev);

    if(old_x == x && old_y == y){

      return;
    }

    let [dx, dy] = [(x - old_x), (y - old_y)];

    if(Math.abs(dx )> 0.25|| Math.abs(dy) > 0.25){
      [old_x, old_y] = [x, y];
      return;
    }

    //console.log(x, "-", old_x, ": ", y, "-", old_y)
    console.log(x, "-", old_x, ": ", (x - old_x));
    console.log(y, "-", old_y, ": ", (y - old_y));
    //console.log(dx, dy);
    //let x = new_x - last_x;
    //let y = new_y - last_y;

    //console.log(x,y);
    camera.viewRoam( (200 * dx), (180 * dy));

    [old_x, old_y] = [x, y];
    //last_x = new_x;
    //last_y = new_y;
  }

}
function ondown(ev){
  moveCam = !moveCam;
  console.log(moveCam);
}
