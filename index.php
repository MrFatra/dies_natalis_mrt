<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Awesome Icon -->
    <script src="https://kit.fontawesome.com/5f5df76327.js" crossorigin="anonymous"></script>

    <!-- Tailwind Config -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#BD874F',
                        secondary: '#FAFAFA',
                        tertiary: '#BD847F'
                    }
                }
            }
        }
    </script>

    <!-- AOS -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <title>MRT Team</title>
</head>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Parkinsans:wght@300..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&display=swap');

    * {
        font-family: "Plus Jakarta Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
</style>

<body>
    <!-- pake php include per-section -->
    <?php
    include 'navbar.html';
    ?>
    <?php
    include 'hero.html';
    ?>
    <?php
    include 'about.html';
    ?>
    <?php
    include 'ilmuwan.html';
    ?>
    <?php
    include 'sejarah.html';
    ?>
    
    <?php include 'componentKhalifah.html' ?>
    <?php include 'componentArticle.html' ?>
    <?php
    include 'footer.html';
    ?>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

</body>

</html>