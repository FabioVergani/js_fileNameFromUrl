const fileNameFromUrl=x=>{
	let s=x,l=s.length,a=false,b=false;
	if(l>1){
		let i=s.lastIndexOf('/');
		if(i!==-1 && ++i!==l){
			s=s.substring(i,l);
			if(l=s.length!==0){
				i=s.lastIndexOf('.');
				if(i!==-1 && i!==--l){
					a=s.substring(0,i);
					s=s.substring(++i);
					if(l=s.length!==0){
						i=s.lastIndexOf('?');
						if(i!==-1 && i!==--l){
							b=s.substring(0,i)
						}else{b=s}
					}
				}
			}
		}
	};
	return [a,b]//nome,estensione
};
//
[
'.',
'a.',
'',
'/',
'https://www.google.it/images/branding/googlelogo/2x/',
'https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp',
'https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.',
'https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.pngz',
'https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.pngz?',
'https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.a?',
'https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.?',
'https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.pngz?v3'
].forEach(x=>{console.log(x,'\n',fileNameFromUrl(x).join('\n'))});
