<?php

namespace App\Models;

use App\Models\Profil;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Utilisateur extends Model
{
    use HasFactory;

    protected  $table = 'utilisateurs';
    protected $primarykey = 'id';

    protected $fillable = ['id','nomComplet, email,telephone,mot_de_passe'];

    public function profils(){
        return $this->belongsTo(Profil::class ,'profil_id','id');
    }
}
