class DjmUtilitesClass {

  originalTarget(ev) {

    return ('composedPath' in ev)
      ? ev.composedPath()[0] : ('path' in ev)
        ? ev.path[0] : ('originalTarget' in ev)
          ? ev.originalTarget : ('srcElement' in ev)
            ? ev.srcElement : ev.target;

  }

  typeOf(val){

    if(!this.typeOf.classTypePairs) {

      this.typeOf.classTypePairs = {};
      'Boolean Number String Function Array Date RegExp Object Error'.split(' ').forEach((name)=> {

        this.typeOf.classTypePairs['[object ' + name + ']'] = name.toLowerCase();

      });

    }

    return val == null
      ? String(val) : typeof val === 'object' || typeof val === 'function'
        ? this.typeOf.classTypePairs[toString.call(val)] || 'object' : typeof val;

  }

  randomId(length){
    
	let result = '', chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    'number' !== this.typeOf(length) && (length = 32);

    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    
	return result;

  }


}

export const DjmUtilites = new DjmUtilitesClass();

