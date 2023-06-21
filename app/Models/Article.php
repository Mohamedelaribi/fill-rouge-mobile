<?php

namespace App\Models;

use App\Models\Modele;
use App\Models\Article;
use App\Models\Endroit;
use App\Models\Vehicule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;

    public function endroits(){
        return $this->hasMany(Endroit::class);
    }

    public function vehicules(){
        return $this->hasMany(Vehicule::class);
    }

    public function modeles(){
        return $this->hasMany(Modele::class);
    }

    public function articles(){
        return $this->belongsToMany(Article::class, 'article_combination', 'article_id','art_article_id');
    }

    public function articlesCombination(){
        return $this->belongsToMany(Article::class,'article_combination', 'art_article_id', 'art_article_id');
    }
}
