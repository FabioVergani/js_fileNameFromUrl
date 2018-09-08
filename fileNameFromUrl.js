const fileNameFromUrl=x=>{
	let a=false,b=false,s=x,l=s.length;
	if(l>1){
		let i=s.lastIndexOf('/');
		if(i!==-1 && --l!==i){
			s=s.substring(i);
			l=s.length;
			if(l!==0){
				i=s.lastIndexOf('.');
				if(i!==-1 && --l!==i){
					a=s.substring(0,i);
					s=s.substring(++i);
					l=s.length;
					if(l>1){
						i=s.lastIndexOf('?');
						b=s.substring(0,(i!==-1 && --l!==i)?i:l)
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
