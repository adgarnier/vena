'''
view at https://pmc.ncbi.nlm.nih.gov/articles/PMC3673738/
there is the math model and the estimation model
'''

import time

def get_age_points(age):
    age_points = {
        (0, 34): 0,
        (35, 39): 2,
        (40, 44): 4,
        (45, 49): 5,
        (50, 54): 7,
        (55, 59): 8,
        (60, 64): 9,
        (65, 69): 10,
        (70, 74): 11,
        (75, float('inf')): 12
    }
    for (lower, upper), points in age_points.items():
        if lower <= age <= upper:
            return points
    raise ValueError('Incorrect age')

def get_hdl_points(hdl_cholesterol):
    hdl_points = {
        (0, 34): 2,
        (35, 44): 1,
        (45, 49): 0,
        (50, 59): -1,
        (60, float('inf')): -2
    }
    for (lower, upper), points in hdl_points.items():
        if lower <= hdl_cholesterol <= upper:
            return points
    raise ValueError('Incorrect HDL cholesterol')

def get_total_cholesterol_points(total_cholesterol):
    cholesterol_points = {
        (0, 159): 0,
        (160, 199): 1,
        (200, 239): 3,
        (240, 279): 4,
        (280, float('inf')): 5
    }
    for (lower, upper), points in cholesterol_points.items():
        if lower <= total_cholesterol <= upper:
            return points
    raise ValueError('Incorrect total cholesterol')

def get_sbp_points(systolic_bp, bp_treatment):
    sbp_points_treated = {
        (0, 119): -3,
        (120, 129): 0,
        (130, 139): 1,
        (140, 149): 2,
        (150, 159): 4,
        (160, float('inf')): 6
    }
    sbp_points_untreated = {
        (0, 119): -1,
        (120, 129): 2,
        (130, 139): 3,
        (140, 149): 5,
        (150, 159): 6,
        (160, float('inf')): 7
    }
    sbp_points = sbp_points_treated if bp_treatment else sbp_points_untreated
    for (lower, upper), points in sbp_points.items():
        if lower <= systolic_bp <= upper:
            return points
    raise ValueError('Incorrect systolic BP')

def get_smoker_points(smoker):
    return 3 if smoker else 0

def get_diabetes_points(diabetes):
    return 4 if diabetes else 0

def get_points_functions():
    return {
        'age': get_age_points,
        'hdl_cholesterol': get_hdl_points,
        'total_cholesterol': get_total_cholesterol_points,
        'smoker': get_smoker_points,
        'diabetes': get_diabetes_points
    }

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

def cardiovascular_risk_survey():
    questions = {
        'age': ("Enter age:", None),
        'hdl_cholesterol': ("Enter HDL cholesterol (mg/dL):", None),
        'total_cholesterol': ("Enter total cholesterol (mg/dL):", None),
        'systolic_bp': ("Enter systolic blood pressure:", None),
        'bp_treatment': ("Under blood pressure treatment? (yes/no):", ["yes", "no"]),
        'smoker': ("Smoker? (yes/no):", ["yes", "no"]),
        'diabetes': ("Diabetes? (yes/no):", ["yes", "no"]),
    }

    responses = {'date': (time.strftime('%x'))}

    for key, (question, valid_options) in questions.items():
        while True:
            response = input(question + ' ').strip().lower()
            if valid_options is None:  # Expecting an integer
                try:
                    responses[key] = int(response)
                    break
                except ValueError:
                    print("Invalid input. Please enter an integer value.")
            else:  # Expecting a yes/no response
                if response in valid_options:
                    responses[key] = response == 'yes'
                    break
                else:
                    print(f"Invalid response. Please choose from the following options: {', '.join(valid_options)}")

    return responses

def save_responses(responses, filename="framingham_responses.txt"):
    with open(filename, 'a') as file:
        file.write(str(responses) + '\n')

def main():
    print("Welcome to the cardiovascular risk assessment survey!")
    responses = cardiovascular_risk_survey()

    # Calculate total points
    points_functions = get_points_functions()
    total_points = sum(
        points_functions[key](responses[key]) 
        for key in responses 
        if key in points_functions
    )

    # Include systolic_bp and bp_treatment for sbp points calculation
    total_points += get_sbp_points(responses['systolic_bp'], responses['bp_treatment'])

    # Calculate risk
    risk_percentage = calculate_risk(total_points)
    responses['risk_percentage'] = risk_percentage
    print(f"\nEstimated 10-year cardiovascular risk: {risk_percentage}%")

    # Save responses to file
    save_responses(responses)

    # print("\nThank you for participating! Here are your responses:")
    # for key, response in responses.items():
    #     print(f"{key}: {response}")

if __name__ == "__main__":
    main()