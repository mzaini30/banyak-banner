<br>
<div class="container">
	<h5 class="text-center">Banyak Banner</h5>
	<hr>
	<div class="row">
		<div class="col-sm-8">
			<div class="form-group">
				<p>Orientasi</p>
				<div class="form-check">
					<input type="radio" name="orientasi" class="form-check-input" id="portrait" checked>
					<label class="form-check-label" for='portrait'>Portrait</label>
				</div>
				<div class="form-check">
					<input type="radio" name="orientasi" class="form-check-input" id="landscape">
					<label class="form-check-label" for='landscape'>Landscape</label>
				</div>
			</div>
			<div class="form-group">
				<label for="kumpulan-link">Kumpulan link</label>
				<textarea bind:this={isian} class="form-control" bind:value={valueIsian} id="kumpulan-link" placeholder="https://situs.com/gambarnya.jpg
https://situs.com/target

https://situs.com/gambarnya.jpg
https://situs.com/target"></textarea>
			</div>
		</div>
		<div class="col-sm-4">
			<p>Kode hasilnya</p>
			<div class="form-group">
				<textarea class="form-control" readonly></textarea>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	import {onMount} from 'svelte'
	let isian
	let valueIsian
	onMount(() => {
		const ubahUkuran = () => {
			isian.style.height = `${window.innerHeight - 250}px`
		}
		ubahUkuran()
		window.addEventListener('resize', ubahUkuran)
	})
	$: if (valueIsian){
		
	}
</script>