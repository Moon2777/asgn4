class Cube{
  constructor(){
    this.type = 'cube';
    this.color = [1, 1, 1, 0];
    this.matrix = new Matrix4();
    this.normalMatrix = new Matrix4();
    this.textEnum = 0;
  }
  render(){
    var rgba = this.color;
    gl.uniform1i(u_whichTexture, this.textEnum);

    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
    gl.uniformMatrix4fv(u_NormalMatrix, false, this.normalMatrix.elements);

    //front
    draw3DUVTNormalTriangle([0, 0, 0,  1, 1, 0,  1, 0, 0], [0,0, 1,1, 1,0], [0,0,1,  0,0,1,  0,0,1]);
    draw3DUVTNormalTriangle([0, 0, 0,  0, 1, 0,  1, 1, 0], [0,0, 0,1, 1,1], [0,0,1,  0,0,1,  0,0,1]);

    //top
    gl.uniform4f(u_FragColor, rgba[0] *0.9, rgba[1] *0.9, rgba[2] *0.9, rgba[3]);
    draw3DUVTNormalTriangle([0, 1, 0,  0, 1, 1,  1, 1, 1], [0,0, 0,1, 1,1], [0,-1,0,  0,-1,0,  0,-1,0]);
    draw3DUVTNormalTriangle([0, 1, 0,  1, 1, 1,  1, 1, 0], [0,0, 1,1, 1,0], [0,-1,0,  0,-1,0,  0,-1,0]);

    //right
    gl.uniform4f(u_FragColor, rgba[0] *0.7, rgba[1] *0.7, rgba[2] *0.7, rgba[3]);
    draw3DUVTNormalTriangle([1, 0, 0,  1, 1, 1,  1, 0, 1], [0,0, 1,1, 1,0], [-1,0,0,  -1,0,0,  -1,0,0]);
    draw3DUVTNormalTriangle([1, 0, 0,  1, 1, 0,  1, 1, 1], [0,0, 0,1, 1,1], [-1,0,0,  -1,0,0,  -1,0,0]);

    //bottom X
    gl.uniform4f(u_FragColor, rgba[0] *0.5, rgba[1] *0.5, rgba[2] *0.5, rgba[3]);
    draw3DUVTNormalTriangle([0, 0, 0,  1, 0, 1,  1, 0, 0], [0,0, 1,1, 1,0], [0,1,0,  0,1,0,  0,1,0]);
    draw3DUVTNormalTriangle([0, 0, 0,  1, 0, 1,  0, 0, 1], [0,0, 1,1, 0,1], [0,1,0,  0,1,0,  0,1,0]);

    //left X
    gl.uniform4f(u_FragColor, rgba[0] *0.3, rgba[1] *0.3, rgba[2] *0.3, rgba[3]);
    draw3DUVTNormalTriangle([0, 1, 0,  0, 0, 1,  0, 1, 1], [0,0, 1,1, 1,0], [1,0,0,  1,0,0,  1,0,0]);
    draw3DUVTNormalTriangle([0, 0, 0,  0, 1, 0,  0, 0, 1], [0,1, 0,0, 1,1], [1,0,0,  1,0,0,  1,0,0]);

    //back X
    gl.uniform4f(u_FragColor, rgba[0] *0.1, rgba[1] *0.1, rgba[2] *0.1, rgba[3]);
    draw3DUVTNormalTriangle([0, 1, 1,  1, 0, 1,  1, 1, 1], [0,0, 1,1, 1,0], [0,0,-1,  0,0,-1,  0,0,-1]);
    draw3DUVTNormalTriangle([0, 1, 1,  1, 0, 1,  0, 0, 1], [0,0, 1,1, 0,1], [0,0,-1,  0,0,-1,  0,0,-1]);

  }
}
