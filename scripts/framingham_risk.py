'''
view at https://pmc.ncbi.nlm.nih.gov/articles/PMC3673738/
there is the math model and the estimation model
'''

def get_age_points(age):
    if age < 35:
        return 0
    elif age <= 39:
        return 2
    elif age <= 44:
        return 4
    elif age <= 49:
        return 5
    elif age <= 54:
        return 7
    elif age <= 59:
        return 8
    elif age <= 64:
        return 9
    elif age <= 69:
        return 10
    elif age <= 74:
        return 11
    elif age > 74:
        return 12
    else:
        print('Incorrect age')

def get_hdl_points(hdl_cholesterol):
    if hdl_cholesterol < 35:
        return 2
    elif hdl_cholesterol <= 44:
        return 1
    elif hdl_cholesterol <= 49:
        return 0
    elif hdl_cholesterol <= 59:
        return -1
    elif hdl_cholesterol > 59:
        return -2
    else:
        print('incorrect hdl')

def get_total_cholesterol_points(total_cholesterol):
    if total_cholesterol < 160:
        return 0
    elif total_cholesterol <= 199:
        return 1
    elif total_cholesterol <= 239:
        return 3
    elif total_cholesterol <= 279:
        return 4
    elif total_cholesterol > 279:
        return 5
    else:
        print('incorrect total')

def get_sbp_points(systolic_bp, bp_treatment):
    if bp_treatment:
        if systolic_bp < 120:
            return -3
        elif systolic_bp <= 129:
            return 0
        elif systolic_bp <= 139:
            return 1
        elif systolic_bp <= 149:
            return 2
        elif systolic_bp <= 159:
            return 4
        elif systolic_bp > 159:
            return 6
        else:
            print('incorrect systolic_bp')
    else:
        if systolic_bp < 120:
            return -1
        elif systolic_bp <= 129:
            return 2
        elif systolic_bp <= 139:
            return 3
        elif systolic_bp <= 149:
            return 5
        elif systolic_bp <= 159:
            return 6
        elif systolic_bp > 159:
            return 7
        else:
            print('incorrect systolic_bp')

def get_smoker_points(smoker):
    return 3 if smoker else 0

def get_diabetes_points(diabetes):
    return 4 if diabetes else 0

def calculate_risk(points):
    risk_dict = {
        -1: 1.0,
        0: 1.2,
        1: 1.5,
        2: 1.7,
        3: 2.0,
        4: 2.4,
        5: 2.8,
        6: 3.3,
        7: 3.9,
        8: 4.5,
        9: 5.3,
        10: 6.3,
        11: 7.3,
        12: 8.6,
        13: 10.0,
        14: 11.7,
        15: 13.7,
        16: 15.9,
        17: 18.5,
        18: 21.5,
        19: 24.8,
        20: 28.5
    }
    if points <= -2:
        return "less than 1"
    return risk_dict.get(points, "greater than 30")

def main():
    # Example input data
    age = int(input("Enter age: "))
    hdl_cholesterol = int(input("Enter HDL cholesterol (mg/dL): "))
    total_cholesterol = int(input("Enter total cholesterol (mg/dL): "))
    systolic_bp = int(input("Enter systolic blood pressure: "))
    bp_treatment = input("Under blood pressure treatment? (yes/no): ").strip().lower() == 'yes'
    smoker = input("Smoker? (yes/no): ").strip().lower() == 'yes'
    diabetes = input("Diabetes? (yes/no): ").strip().lower() == 'yes'

    # Calculate total points
    total_points = (
        get_age_points(age) +
        get_hdl_points(hdl_cholesterol) +
        get_total_cholesterol_points(total_cholesterol) +
        get_sbp_points(systolic_bp, bp_treatment) +
        get_smoker_points(smoker) +
        get_diabetes_points(diabetes)
    )

    # Calculate risk
    risk_percentage = calculate_risk(total_points)
    print(f"Estimated 10-year cardiovascular risk: {risk_percentage}%")

if __name__ == "__main__":
    main()