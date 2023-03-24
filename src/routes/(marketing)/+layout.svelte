<script>
	import PrimaryNav from '@components/global/primary-nav.svelte';
	import Layout from '@components/global/layout.svelte';
</script>

<Layout>
	<PrimaryNav slot="nav" />
	<slot slot="content" />
</Layout>
