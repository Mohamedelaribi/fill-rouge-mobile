<?php

namespace App\Models;

use App\Models\Vehicule;
use App\Models\Utilisateur;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model
{
    use HasFactory;

    public function vehicules(){
        return $this->hasMany(Vehicule::class);
    }

    public function utilisateurs(){
        return $this->hasMany(Utilisateur::class);
    }
}
