<?php

namespace App\Infrastructure\Controller\Site;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(
    ): Response {
        // return $this->render(
        //     'site/home/index.html.twig'
        // );

        return $this->redirectToRoute('app_satisfactory_blueprints');
    }
}
