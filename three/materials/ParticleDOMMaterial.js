ml.module('three.materials.ParticleDOMMaterial')
.requires('three.Three')
.defines(function(){

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.ParticleDOMMaterial = function ( domElement ) {

	this.domElement = domElement;

};

THREE.ParticleDOMMaterial.prototype.clone = function(){ 

	return new THREE.ParticleDOMMaterial( this.domElement );

};


});