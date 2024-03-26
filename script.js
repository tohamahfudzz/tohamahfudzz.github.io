const nama=document.getElementById('nama');
const lampu=document.getElementsByClassName('lampu');
const body=document.body;
const deskrip=document.getElementsByClassName('deskripsi');
const link=document.getElementsByClassName('link');
const judulLink=link[0].querySelector(':nth-child(1)');

lampu[0].style.backgroundImage="url('1.png')";
body.style.backgroundColor="white";
nama.style.color="black";
nama.style.fontSize="50px";
nama.style.fontFamily="times new roman";
nama.style.textAlign="center";


//lampu.onclick=hidup;
/*lampu[0].addEventListener('click',function()
{
lampu[0].classList.add('animate');
});*/

function aktif()
{  
	if(body.style.backgroundColor==="white")
	{
		lampu[0].classList.add('animate');
	}

	setTimeout(function()
	{

	if(body.style.backgroundColor==="white")
	{
		nama.style.color="#87CEEB";
		deskrip[0].style.color='white';
		judulLink.style.color='blue';
	body.style.backgroundColor='black';

	lampu[0].style.backgroundImage="url('last.png')"
}
else if(body.style.backgroundColor==="black")
{
	nama.style.color="black";
	deskrip[0].style.color='black';
		judulLink.style.color='black';
	body.style.backgroundColor='white';
	lampu[0].style.backgroundImage="url('1.png')"
}
	},3000);
	
	

	
	lampu[0].removeEventListener('click',aktif);
}
function reset()
{
	setTimeout(function()
	{
lampu[0].classList.remove('animate');
	lampu[0].addEventListener('click',aktif);
	
	},3000);
	
}
lampu[0].addEventListener('click',aktif);
lampu[0].addEventListener('click',reset);


//catatan belum bisa mengganti bacground menjadi on atau off
