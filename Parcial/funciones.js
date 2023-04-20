function totaltransformaciones(objeto) {

  objeto.scale.setX(sx);
  objeto.scale.setY(sy);
  objeto.scale.setZ(sz);

//proceso de traslacion y rotacion para acomodar

//Rotacion del esfera

  objeto.translateY(Ty);

  objeto.rotation.x += Rx;
  objeto.rotation.y += Ry;

  objeto.translateX(Tx);


return objeto
}