<?php

namespace App\Models;

use App\Models\Type;
use App\Models\Article;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Modele extends Model
{
    use HasFactory;

    public function articles(){
        return $this->hasMany(Article::class);
    }

    public function types(){
        return $this->belongsTo(Type::class);
    }
}
