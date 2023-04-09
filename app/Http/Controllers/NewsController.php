<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Services\PayUService\Exception;
class NewsController extends Controller
{
    public function index(Request $request)
    {
        try{
        $response = Http::get('https://newsapi.org/v2/everything', [
            'q' => $request->searchTerm,
            'from' => $request->dateFilter,
            'category' => $request->categoryFilter,
            'sources' => $request->sourceFilter,
            'apiKey' => env('API_NEWSAPI'),
        ]);
        
        if($response['status']=='ok'){
        $articles = array_map(function ($item) {
            return [
                "title" => $item['title'],
                "type"=>'newsapi',
                "description" => $item['description'],
                "url" => $item['url'],
                "author" => $item['author'],
                "publishedAt" => $item['publishedAt'],
                "img"=>$item['urlToImage']
            ];
        },$response['articles']); 
        }else{
            $articles =[];
        }
    
        return ["articles" => $articles];
    } catch (\Exception $e) {

        return ["error"=>$e->getMessage()];
    }
    }
    
    public function theguardian(Request $request)
    {
        try{
        $response = Http::get('https://content.guardianapis.com/search', [
            'q' => $request->searchTerm,
            'from-date' => $request->dateFilter,
            'section' => $request->categoryFilter,
            'api-key' => env('API_GUARDIAN'),
          
        ]);
        //dd($response['response']['results']);
        $articles = array_map(function ($item) {
            return [
                "title" => $item['webTitle'],
                "type"=>'guardian',
                "description" => "",
                "url" => $item['webUrl'],
                "author" => "",
                "publishedAt" => $item['webPublicationDate'],
                "img"=>""
            ];
        },$response['response']['results']);
    
        return ["articles" => $articles];
    } catch (\Exception $e) {

        return ["error"=>$e->getMessage()];
    }
    }
    
    
    public function nytimes(Request $request)
    {
        try{
        $response = Http::get('https://api.nytimes.com/svc/search/v2/articlesearch.json', [
            'q' => $request->searchTerm,
            'begin_date' => $request->dateFilter,
            'fq' => $request->categoryFilter,
            'api-key' => env('API_NYTIMES'),
        ]);
        //dd($response['response']['docs']);
        $articles = array_map(function ($item) {
            return [
                "title" => $item['headline']['main'],
                "type"=>'nytimes',
                "description" => $item['lead_paragraph'],
                "url" => $item['web_url'],
                "author" => $item['byline']['original'],
                "publishedAt" => $item['pub_date'],
                "img"=>""
            ];
        },$response['response']['docs']);
    
        return ["articles" => $articles];
    } catch (\Exception $e) {

        return ["error"=>$e->getMessage()];
    }
    }

    public function sources()
    {
        $response = Http::get('https://newsapi.org/v2/sources', [
            'apiKey' => '885027ffe294483e8816b50b9ea79011',
        ]);

        return $response->json();
    }
}
