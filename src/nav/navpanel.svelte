<script>
	import Navigation from '../components/Navigation/Navigation.svelte';
	const navList = [
		{ Href: '/', Name: 'Home', IconName:'home' },
		{ Href: '/comparetext', Name: 'Compare Texts', IconName:'layers'},
		{ Href: '/generateguid', Name: 'Guid Generator' , IconName:'tag'},
		{ Href: '/generaterandomnumber', Name: 'Random Number Generator', IconName:'123' },
		{ Href: '/generaterandomstring', Name: 'Random String Generator', IconName:'ABC' },
		{ Href: '/textworks', Name: 'Text Operations', IconName:'text_snippet' }
	];
</script>
 
<Navigation {navList} />
