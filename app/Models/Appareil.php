<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Type;
class Appareil extends Model
{
    use HasFactory;

    public function types(){
        return $this->hasMany(Type::class);
    }
}
