package com.mertisconsulting.cpq.translate.model;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by: michael
 * Date: 2/1/18
 **/
abstract public class ModelObject {

    private Map<String,String> languageDependentNames;

    public ModelObject() {
        this.languageDependentNames = new HashMap<>();
    }

    public Map<String, String> getLanguageDependentNames() {
        return languageDependentNames;
    }

    public String getLanguageDependentName(String language) {
        if (this.languageDependentNames.isEmpty())
            return "";
        return this.languageDependentNames.get(language);
    }

    public void setLanguageDependentNames(Map<String, String> names) {
        this.languageDependentNames = names;
    }

    public void addLanguageDependentName(String language, String name) {
        this.languageDependentNames.put(language, name);
    }
}
