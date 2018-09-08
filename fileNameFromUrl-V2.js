const fileNameFromUrl=t=>{
	let l,i,s=t,a=false,b=false;
	const f=x=>{
	return (l=s.length)>1 && (i=s.lastIndexOf(x))!==-1 && --l!==i
	};
	if(f('/')){
		s=s.substring(i);
		if(f('.')){
			a=s.substring(0,i);
			s=s.substring(++i);
			if(i!==l){
				b=s.substring(0,f('?')?i:l)
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
