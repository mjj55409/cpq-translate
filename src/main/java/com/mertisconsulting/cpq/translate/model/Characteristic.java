package com.mertisconsulting.cpq.translate.model;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by: michael
 * Date: 2/1/18
 **/
public class Characteristic extends ModelObject {
    private String technicalName;

    public Characteristic(String name) {
        this.technicalName = name;
    }

    public String getTechnicalName() {
        return technicalName;
    }

}
