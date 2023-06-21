<?php

namespace App\Models;

use App\Models\Article;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Endroit extends Model
{
    use HasFactory;

    public function articles(){
        return $this->hasMany(Article::class,);
    }
}
