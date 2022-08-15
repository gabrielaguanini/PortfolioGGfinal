
package com.portfolio.portfoliogg.Controller;

import com.portfolio.portfoliogg.Entity.ExperienciaLab;
import com.portfolio.portfoliogg.Service.ServiceExpLab;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/explaboral")
@CrossOrigin(origins = "http://localhost:4200")
public class ControllerExpLab {

    @Autowired
    ServiceExpLab serviceExpLab;

   @GetMapping("/listaexplab")
   @ResponseBody
   public List<ExperienciaLab>listaexplab(){
       return serviceExpLab.listaexplab();
   } 
   
   @PostMapping("/crearexplab")
   public void crearExpLab(@RequestBody ExperienciaLab explab){
    serviceExpLab.crearExpLab(explab);
   }
   
   @DeleteMapping("/borrarexplab/{id}")
    public void borrarExpLab(@PathVariable int id){
    serviceExpLab.borrarExpLab(id);
    }
    
    @PutMapping("/editarexplab")
    public void editarExpLab(@PathVariable ExperienciaLab explab){
           serviceExpLab.editarExpLab(explab);
    }
    
    @GetMapping("/buscarexplab/{id}")
    @ResponseBody
    public ExperienciaLab buscarExpLab(@PathVariable int id){
    return serviceExpLab.buscarExpLab(id);
    }
}

