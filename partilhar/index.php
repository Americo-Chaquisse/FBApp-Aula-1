<?php
$nomeUser = (isset($_GET['nome']))?$_GET['nome']:'';
$nomeElogio = (isset($_GET['e']))?$_GET['e']:'';
$baseUrl = "https://web.co.mz/apps/fbapp_01" ?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Web - Partilhe o seu elogio</title>
    <meta name="description" content="">
    <meta name="author" content="Américo Chaquisse">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <meta property="og:url" content="<?php echo $baseUrl; ?>/partilhar/?nome=<?php echo $nomeUser; ?>&e=<?php echo $nomeElogio; ?>" />
    <meta property="og:type"            content="article" />
    <meta property="og:url"             content="<?php echo $baseUrl; ?>" />
    <meta property="og:title"           content="<?php echo $nomeUser; ?> é <?php echo $nomeElogio; ?>" />
    <meta property="og:image"           content="<?php echo $baseUrl; ?>/partilhar/foto_partilha.jpg" />
    <meta property="og:description"     content="Clique e experimente a nossa app. Saiba qual elogio lhe merece!" />
    <meta property="og:site_name"       content="WEB.CO.MZ"/>
    <meta property="fb:app_id"          content="1713150355630832" />

</head>
    <script>
        location.href = '<?php echo $baseUrl; ?>';
    </script>
</html>