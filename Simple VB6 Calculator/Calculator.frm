VERSION 5.00
Begin VB.Form main 
   Caption         =   "Calculator"
   ClientHeight    =   5475
   ClientLeft      =   12690
   ClientTop       =   6135
   ClientWidth     =   3975
   LinkTopic       =   "Form1"
   ScaleHeight     =   5475
   ScaleWidth      =   3975
   StartUpPosition =   2  'CenterScreen
   Begin VB.CommandButton btn_equals 
      Caption         =   "="
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   14.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   3000
      TabIndex        =   0
      Top             =   4680
      Width           =   855
   End
   Begin VB.CommandButton btn_clear 
      Caption         =   "C"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   120
      TabIndex        =   15
      Top             =   1800
      Width           =   855
   End
   Begin VB.CommandButton btn_div 
      Caption         =   "/"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   3000
      TabIndex        =   14
      Top             =   1800
      Width           =   855
   End
   Begin VB.CommandButton btn_add 
      Caption         =   "+"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   3000
      TabIndex        =   13
      Top             =   3960
      Width           =   855
   End
   Begin VB.CommandButton btn_subtract 
      Caption         =   "-"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   14.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   3000
      TabIndex        =   12
      Top             =   3240
      Width           =   855
   End
   Begin VB.CommandButton btn_multiply 
      Caption         =   "X"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   3000
      TabIndex        =   11
      Top             =   2520
      Width           =   855
   End
   Begin VB.CommandButton btn_zero 
      Caption         =   "0"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   1080
      TabIndex        =   10
      Top             =   4680
      Width           =   855
   End
   Begin VB.CommandButton btn_three 
      Caption         =   "3"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   2040
      TabIndex        =   9
      Top             =   2520
      Width           =   855
   End
   Begin VB.CommandButton btn_two 
      Caption         =   "2"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   1080
      TabIndex        =   8
      Top             =   2520
      Width           =   855
   End
   Begin VB.CommandButton btn_one 
      Caption         =   "1"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   120
      TabIndex        =   7
      Top             =   2520
      Width           =   855
   End
   Begin VB.CommandButton btn_six 
      Caption         =   "6"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   2040
      TabIndex        =   6
      Top             =   3240
      Width           =   855
   End
   Begin VB.CommandButton btn_five 
      Caption         =   "5"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   1080
      TabIndex        =   5
      Top             =   3240
      Width           =   855
   End
   Begin VB.CommandButton btn_four 
      Caption         =   "4"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   120
      TabIndex        =   4
      Top             =   3240
      Width           =   855
   End
   Begin VB.CommandButton btn_nine 
      Caption         =   "9"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   2040
      TabIndex        =   3
      Top             =   3960
      Width           =   855
   End
   Begin VB.CommandButton btn_eight 
      Caption         =   "8"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   1080
      TabIndex        =   2
      Top             =   3960
      Width           =   855
   End
   Begin VB.CommandButton btn_seven 
      Caption         =   "7"
      BeginProperty Font 
         Name            =   "MS Reference Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   120
      TabIndex        =   1
      Top             =   3960
      Width           =   855
   End
   Begin VB.Frame Frame1 
      Appearance      =   0  'Flat
      BackColor       =   &H8000000D&
      BorderStyle     =   0  'None
      ForeColor       =   &H80000008&
      Height          =   5535
      Left            =   0
      TabIndex        =   16
      Top             =   0
      Width           =   4095
      Begin VB.Frame Frame2 
         Appearance      =   0  'Flat
         BackColor       =   &H80000005&
         BorderStyle     =   0  'None
         ForeColor       =   &H80000008&
         Height          =   1455
         Left            =   120
         TabIndex        =   17
         Top             =   120
         Width           =   3735
         Begin VB.Label num2 
            Alignment       =   1  'Right Justify
            Appearance      =   0  'Flat
            AutoSize        =   -1  'True
            BackColor       =   &H80000005&
            Caption         =   "0"
            BeginProperty Font 
               Name            =   "MS Sans Serif"
               Size            =   8.25
               Charset         =   0
               Weight          =   700
               Underline       =   0   'False
               Italic          =   0   'False
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H80000008&
            Height          =   195
            Left            =   3525
            TabIndex        =   19
            Top             =   720
            Visible         =   0   'False
            Width           =   120
         End
         Begin VB.Label num 
            Alignment       =   1  'Right Justify
            Appearance      =   0  'Flat
            AutoSize        =   -1  'True
            BackColor       =   &H80000005&
            Caption         =   "0"
            BeginProperty Font 
               Name            =   "MS Sans Serif"
               Size            =   12
               Charset         =   0
               Weight          =   700
               Underline       =   0   'False
               Italic          =   0   'False
               Strikethrough   =   0   'False
            EndProperty
            ForeColor       =   &H80000008&
            Height          =   300
            Left            =   3480
            TabIndex        =   18
            Top             =   1080
            Width           =   165
         End
      End
   End
End
Attribute VB_Name = "main"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'DECLARE
Dim op As String
Dim calcVal As Double

'FUNCTIONS
Public Function append_num(btn_num As Integer) 'append each button pressed to a label
    If num.Caption = "0" Then
        num.Caption = btn_num
        If btn_num = "0" Then
            num.Caption = "0"
        End If
    ElseIf num.Caption = "Invalid" Then
        num.Caption = btn_num
        num2.Caption = "0"
        num2.Visible = False
        If btn_num = "0" Then
            num.Caption = "0"
        End If
    Else
        num.Caption = num.Caption + Str(btn_num)
    End If
End Function

Public Function choose_operator(chosen_op As String) 'choose operator, append, then switch to another label
    op = chosen_op
    num2.Visible = True
    num2.Caption = num.Caption + " " + chosen_op
    num.Caption = "0"
End Function
'END OF FUNCTIONS

Private Sub btn_clear_Click() 'clear content
    num.Caption = "0"
    num2.Caption = "0"
    num2.Visible = False
End Sub

'Operator Buttons
Private Sub btn_div_Click()
   choose_operator ("/")
End Sub

Private Sub btn_multiply_Click()
   choose_operator ("*")
End Sub

Private Sub btn_subtract_Click()
   choose_operator ("-")
End Sub

Private Sub btn_add_Click()
   choose_operator ("+")
End Sub

Private Sub btn_equals_Click()
    If op = "+" Then
        calcVal = Val(num2.Caption) + Val(num.Caption)
        num.Caption = calcVal
        num2.Caption = "0"
        num2.Visible = False
        
    ElseIf op = "-" Then
        calcVal = Val(num2.Caption) - Val(num.Caption)
        num.Caption = calcVal
        num2.Caption = "0"
        num2.Visible = False
        
    ElseIf op = "*" Then
        calcVal = Val(num2.Caption) * Val(num.Caption)
        num.Caption = calcVal
        num2.Caption = "0"
        num2.Visible = False
        
    ElseIf op = "/" Then
        If num.Caption <> "0" Then
            calcVal = Val(num2.Caption) / Val(num.Caption)
            num.Caption = calcVal
            num2.Caption = "0"
            num2.Visible = False
        Else
            num.Caption = "Invalid"
            num2.Visible = False
        End If
    Else
        
    End If
    
End Sub
'End of Operator Buttons

Private Sub btn_one_Click()
    append_num (1)
End Sub

Private Sub btn_two_Click()
    append_num (2)
End Sub

Private Sub btn_three_Click()
    append_num (3)
End Sub

Private Sub btn_four_Click()
    append_num (4)
End Sub

Private Sub btn_five_Click()
    append_num (5)
End Sub

Private Sub btn_six_Click()
    append_num (6)
End Sub

Private Sub btn_seven_Click()
    append_num (7)
End Sub

Private Sub btn_eight_Click()
    append_num (8)
End Sub

Private Sub btn_nine_Click()
    append_num (9)
End Sub

Private Sub btn_zero_Click()
    append_num (0)
End Sub
