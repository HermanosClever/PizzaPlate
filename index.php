<?php
$page = 'home';
 ?>
<!DOCTYPE html>
<?php include 'incl/cc.inc'; ?>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>My HTML Starter kit</title>
		<?php include 'incl/head.inc'; ?>
	</head>
	<body class="<?php echo $page; ?> ">
		<div class="page_container">

			<?php include 'incl/header.inc'; ?>

			<!-- Main content -->
			<section id="main">
				<div class="wrapper">
					<p>(Main content)</p>
				</div>
			</section>

			<?php include 'incl/footer.inc'; ?>

		</div>
		<?php include 'incl/js.inc'; ?>
		<?php include 'incl/tag.inc'; ?>
	</body>
</html>
