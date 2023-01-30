# VBA代码集
* [1.新建文件或者文件夹](#id01)
* [2.新建文件或者文件夹](#id02)
## 文件|文件夹相关
### 1.新建文件或者文件夹 <a id="id01"></a>
带入的参数扩展名为“xls/xlsx”，就建立文件，没有扩展名则建立文件夹。

    Sub make_file(file_name As String)
      file_path = ThisWorkbook.Path + "\"
      arr = Split(file_name, ".")
      arr_max = UBound(arr)
      ext = arr(arr_max) '获取file_name的扩展名，判断是否是一个文件
      If ext = "xls" Or ext = "xlsx" Then
        Debug.Print "是文件，将新建文件"
        If Dir(file_path + file_name) <> "" Then
          Debug.Print "文件存在"
        Else
          Debug.Print "文件不存在"
          Workbooks.Add
          ActiveWorkbook.SaveAs Filename:=file_path + file_name
          '新建文件并命名后进行相应操作
          
          
          ActiveWorkbook.Save
          ActiveWorkbook.Close
          
        End If
      Else
        Debug.Print "不是文件，将新建文件夹"
        f = Len(Dir(file_path + file_name, vbDirectory))
        If f Then
          Debug.Print "文件夹已经存在"
        Else
          '新建文件夹
          MkDir file_path + file_name
        End If
      End If
    End Sub

### 2.遍历文件夹下所有excel文件（不包含子文件夹）<a id="id02"></a>

    Sub open_file()
      file_path = ThisWorkbook.Path & "\"
      f = Dir(file_path & "*.xls*")
      Do While f <> ""
        If f <> ThisWorkbook.Name Then
          Workbooks.Open Filename:=file_path & f
          '操作打开的工作簿      
          '......
          
          ActiveWorkbook.Close savechanges:=True
        End If
        f = Dir
      Loop
    End Sub
